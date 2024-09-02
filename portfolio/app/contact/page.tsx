import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("meojnwwr");
  if (state.succeeded) {
    return (
      <div>
        <p className="text-3xl font-bold flex items-center justify-center">
          Thanks for getting in touch!
        </p>
        <p className="text-3xl font-bold flex items-center justify-center">
          I will get back to you as soon as possible
        </p>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black w-96 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-3xl font-bold mb-6 text-center">Get in touch!</h1>
          <form
            onSubmit={handleSubmit}
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <p className="mb-3 mt-5">Message</p>
            <textarea
              id="message"
              name="message"
              className="rounded-lg text-black"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-5 mb-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
