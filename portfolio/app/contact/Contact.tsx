export default function Contact() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black w-96 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-3xl font-bold mb-6 text-center">Get in touch!</h1>
          <form
            action="https://formspree.io/f/meojnwwr"
            method="POST"
            className="flex flex-col text-lg leading-relaxed"
          >
            <label htmlFor="name" className="mb-3">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="rounded-lg text-black"
            />
            <label htmlFor="email" className="mb-3 mt-5">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="rounded-lg text-black"
            />
            <p className="mb-3 mt-5">Message</p>
            <textarea
              id="message"
              name="message"
              className="rounded-lg text-black"
            />
            <button type="submit" className="mt-5 mb-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
