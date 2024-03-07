import https from 'https';
import dotenv from 'dotenv';
import { log } from '@moncici/log'

//SELL https://open.feishu.cn/open-apis/bot/v2/hook/79bfd342-***-***
//BUY https://open.feishu.cn/open-apis/bot/v2/hook/e7b3931f-******c

dotenv.config();
const BUY_ACCESS_TOKEN = process.env.BUY_ACCESS_TOKEN;
const SELL_ACCESS_TOKEN = process.env.SELL_ACCESS_TOKEN;

export function notify(direction, msg) {
  let ACCESS_TOKEN = direction == 'BUY' ? BUY_ACCESS_TOKEN : SELL_ACCESS_TOKEN;
  doNotify(ACCESS_TOKEN, `${direction} ${msg}`);
}

export function doNotify(accessToken, msg) {
    const message = {
      msg_type: 'text',
      content: {
        text: `${msg}`,
      },
    };

    const options = {
      hostname: 'open.feishu.cn',
      path: `/open-apis/bot/v2/hook/${accessToken}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const req = https.request(options, (res) => {
      let data = '';
  
      res.on('data', (chunk) => {
        data += chunk;
      });
  
      res.on('end', () => {
        const jsonData = JSON.parse(data);
  
        if (jsonData.msg === 'success') {
          log('消息发送成功');
        } else {
          // console.error('消息发送失败', jsonData.errmsg);
          log('消息发送失败', jsonData.msg);
        }
      });
    });
  
    req.on('error', (error) => {
      log(error);
    });
  
    req.write(JSON.stringify(message));
    req.end();
  }

  // notify('SELL', " nice pirce")
  // notify('BUY', " nice pirce")
