export default function Card() {
  return (
    <div className="lg:flex bg-white rounded-lg">
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <a
          href="#"
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
          How to use sticky note for problem solving
        </a>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          On: 20 October 2019
        </span>
      </div>
    </div>
  );
}
