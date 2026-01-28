<template>
  <section class="max-w-3xl mx-auto px-6 py-20">
    
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      Contact Us
    </h1>

    <p class="text-gray-600 mb-10">
      Tell us about your project or technical needs. We’ll get back to you as soon as possible.
    </p>

    <form
      action="https://formspree.io/f/xqebkkpy"
      method="POST"
      class="space-y-6"
    >
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          class="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          class="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          class="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary transition"
      >
        Send Message
      </button>
    </form>

  </section>
</template>
