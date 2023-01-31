import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [

  {

    id: "Greet",

    message: "Hello, Welcome to our shop",

    trigger: "Done",

  },

  {

    id: "Done",

    message: "Please enter your name!",

    trigger: "waiting1",

  },

  {

    id: "waiting1",

    user: true,

    trigger: "Name",

  },

  {

    id: "Name",

    message: "Hi {previousValue}, Please select your issue",

    trigger: "issues",

  },

  {

    id: "issues",

    options: [

      {

        value: "React",

        label: "React",

        trigger: "React",

      },

      { value: "Angular", label: "Angular", trigger: "Angular" },

    ],

  },

  {

    id: "React",

    message:

      "Thanks for letting your React issue, Our team will resolve your issue ASAP",

    end: true,

  },

  {

    id: "Angular",

    message:

      "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

    end: true,

  },

]; 

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "img.png",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Support"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
