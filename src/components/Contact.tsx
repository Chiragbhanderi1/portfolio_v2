import React, { useState } from "react";
import "./contact.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const firebaseConfig = {
      apiKey: "AIzaSyDOx6iDHFQoJCmooTzO7oRHBWBlfzml4rk",
      authDomain: "portfolio-v2-9aa54.firebaseapp.com",
      projectId: "portfolio-v2-9aa54",
      storageBucket: "portfolio-v2-9aa54.appspot.com",
      messagingSenderId: "364225130453",
      appId: "1:364225130453:web:8385daf152024e7b65175c",
      measurementId: "G-T7NS35FFJD",
    };

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

     
    // Function to add a message to Firestore
    const addMessageToFirestore = async (messageData:any) => {
      try {
        const docRef = await addDoc(
          collection(firestore, "messages"),
          messageData
        );       
      } catch (error) {
        setError(error);
        setIsFormSubmitted(true);
        setIsLoading(false);
        console.error("Error adding message:", error);
      }
      setEmail("");
        setName("");
        setMessage("");
        setIsFormSubmitted(true);
        setIsLoading(false);
    };
    addMessageToFirestore({
      name: name,
      email: email,
      message: message,
    });
  };

  return (
    <div
      className="h-[100vh] mt-[100px] flex items-center justify-center"
      id="contact"
    >
      <div className="md:max-w-7xl w-full  flex items-center justify-center">
        <div
          id="profile"
          className="lg:w-3/5 w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white  mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('/chirag.jpeg')",
              }}
            ></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Get in Touch</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-violet-500 opacity-25"></div>
            <div className="flex justify-center w-full  mt-3 relative overflow-hidden z-10 bg-white p-4 md:p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
              {!isFormSubmitted ? (
                <form
                  className="w-full"
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="mb-6">
                    <div className="relative flex justify-start">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="border-b w-full md:w-[50%] border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                      />
                      <label
                        htmlFor="username"
                        className={`absolute left-0 ${
                          name.length < 1
                            ? "top-1"
                            : "-top-4 text-xs text-blue-700"
                        } cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700`}
                      >
                        Name
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="relative flex justify-start">
                      <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="border-b w-full md:w-[50%] border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                      />
                      <label
                        className={`absolute left-0 ${
                          email.length < 1
                            ? "top-1"
                            : "-top-4 text-xs text-blue-700"
                        } cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700`}
                      >
                        Email
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-start text-sm font-medium text-blue-700"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="mt-1 p-2 w-full border focus:border-2 rounded-md focus:border-blue-700 focus:outline-none"
                      rows={3}
                      name="message"
                      id="message"
                      required
                      placeholder="Message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                      type="submit"
                    >
                      {isLoading ? "Loading ..." : "Submit"}
                    </button>
                  </div>
                  <div className="mt-6 pb-8 md:pb-16 lg:pb-0 w-full mx-auto flex flex-wrap items-center justify-left gap-6">
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/chirag-bhanderi-595695231/"
                      data-tippy-content="@linkdin"
                    >
                      <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-600 hover:[&>svg]:fill-[#0077b5]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <title>Linkdin</title>
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                      </span>
                    </a>
                    <a
                      className="link"
                      href="https://github.com/Chiragbhanderi1"
                      data-tippy-content="@github_handle"
                    >
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-black"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>

                    <a
                      className="link"
                      href="https://twitter.com/ChiragBhander12"
                      data-tippy-content="@twitter_handle"
                    >
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-blue-400"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter</title>
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                    </a>

                    <a
                      className="link"
                      href="https://www.instagram.com/chiragbhanderi_122/"
                      data-tippy-content="@instagram_handle"
                    >
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-pink-700"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                    <a
                      className="link"
                      href="https://twitter.com/ChiragBhander12"
                      data-tippy-content="@facebook_handle"
                    >
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-blue-600"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                      </svg>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="max-w-[300px] flex flex-col  items-center justify-center bg-transparent rounded-2xl">
                  <div className="text-center  flex-auto justify-center">
                    {!error ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14 h-14 flex items-center text-green-400 mx-auto"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 32 32"
                        className="w-14 h-14 flex items-center text-red-400 mx-auto"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>cross-circle</title>
                        <defs></defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Icon-Set"
                            transform="translate(-568.000000, -1087.000000)"
                            fill="#000000"
                          >
                            <path
                              d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z"
                              id="cross-circle"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    )}
                    <h2 className="text-2xl font-bold py-4 text-gray-900">
                      {!error?"Success":"Error"}
                    </h2>
                    <p className="text-lg text-gray-500 px-2">
                     {!error?"Thankyou for sending the feedback will surely work on to that.":error}
                    </p>
                  </div>
                  <div className="p-2 mt-2 text-center space-x-1 md:block">
                    <button
                      onClick={() => {
                        setIsFormSubmitted(false);
                      }}
                      className={`${!error ?"bg-green-400 hover:bg-green-500":"bg-red-400 hover:bg-red-500"} px-5 ml-4 py-2 text-md shadow-sm hover:shadow-lg font-bold tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300`}
                    >
                     {!error?" Submit another response":"Try again"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 w-0 h-[850px]">
          <img
            width={586}
            // height={879}
            src="/chirag2.jpg"
            className="rounded-none object-center object-cover h-full w-auto lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;


