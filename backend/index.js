require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
// const { message } = require("telegraf/filters");

// console.log(process.env.BOT_TOKEN);

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.on("text", async (ctx) => {
// 	const user = {
// 		id: ctx.message.from.id, //	id: 933701082,
// 		name: ctx.message.from.username, //	username: 'VeRoma9',
// 		firstName: ctx.message.from.first_name, //	first_name: 'Roman',
// 		isBot: ctx.message.from.is_bot, //	is_bot: false,
// 		language_code: ctx.message.from.language_code, //	language_code: 'ru'
// 	};

// 	console.log(user);
// });
bot.start((ctx) => {
	const welcomeMessage = "Привет! Выберите действие:";

	// Создаем инлайн-кнопку
	const inlineKeyboard = Markup.inlineKeyboard([
		Markup.button.webApp(
			"Open web app",
			"https://main--telegram-web-app-eng-front.netlify.app/"
		),
	]);

	// Отправляем сообщение с клавиатурой
	ctx.reply(welcomeMessage, inlineKeyboard);

	/*	// Создаем клавиатуру с ответами
	const replyKeyboard = Markup.keyboard([["PUSH ME"]])
		.resize()
		.oneTime();

	// Отправляем сообщение с клавиатурой
	ctx.reply(welcomeMessage, replyKeyboard);
});

// Обработчик для нажатий на первую кнопку
bot.hears("PUSH ME", (ctx) => {
	ctx.reply("Вы нажали");			//		*/

	bot.action("button_click", (ctx) => {
		ctx.reply("Вы нажали кнопку!");
	});
});

// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

// window.Telegram.
