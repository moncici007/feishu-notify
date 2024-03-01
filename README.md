# Feishu Notification Bot

This project contains a simple Feishu (Lark) notification bot that can send buy and sell notification messages to a specified Feishu webhook. This is very useful for scenarios where real-time notifications are needed in a trading system.

## Prerequisites

Before getting started, make sure you have obtained the `access_token` for the Feishu webhook. You need to set up webhooks for both buy and sell operations and obtain the respective `access_token`.

## Installation

First, you need to install the project dependencies. Run the following command in the root directory of the project:

```bash
npm install
```

This will install all necessary dependencies, including `https` and `dotenv`.

## Configuration

1. Create a `.env` file in the root directory of the project.
2. In the `.env` file, add the following content, replacing `<YOUR_BUY_ACCESS_TOKEN>` and `<YOUR_SELL_ACCESS_TOKEN>` with your actual Feishu webhook `access_token`:

```
BUY_ACCESS_TOKEN=<YOUR_BUY_ACCESS_TOKEN>
SELL_ACCESS_TOKEN=<YOUR_SELL_ACCESS_TOKEN>
```

Make sure not to commit the `.env` file to public code repositories. You can add `.env` to `.gitignore` to prevent it from being tracked by Git.

## Usage

The project provides a `notify` function for sending buy or sell notifications. You can use it by specifying `direction` (`'BUY'` or `'SELL'`) and `msg` (message content).

Example code:

```javascript
import { notify } from './path/to/your/script';

// Send a buy notification
notify('BUY', "Nice price for buying");

// Send a sell notification
notify('SELL', "Good time to sell");
```

## Contributing

If you have any suggestions for improvement or want to contribute code, feel free to submit a Pull Request or create an Issue.

## License

[MIT](LICENSE)

---

Please adjust the example code path in the README according to your actual project path and needs. I hope this README helps you better introduce and use your Feishu notification bot project!
