<script>
  import { Button, Card } from 'flowbite-svelte';

  import ContactHero from "$lib/images/pages/contact/contact-hero.webp?enhanced";
</script>

<svelte:head>
  <title>Contact Us | Lancaster University Hockey Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="p-8">
  <div class="relative overflow-hidden rounded-xl text-white text-center px-8 py-16 shadow-xl">
    <enhanced:img 
      src={ContactHero} 
      alt="Hero Background" 
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div class="absolute inset-0 bg-black/70 z-0 rounded-xl"></div>
    <div class="relative z-10 space-y-6" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
      <p class="text-xl max-w-2xl mx-auto drop-shadow-md">Whether you’re a player, sponsor, or fan, we’d love to hear from you. Here’s how to reach us:</p>
    </div>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 py-12 space-y-12 text-gray-900">
  <!-- Quick Contacts -->
  <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-6 text-center">Quick Contact Options</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <Card class="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in">
        <h3 class="text-xl font-semibold mb-1">Men’s Club Instagram</h3>
        <Button href="https://instagram.com/lumhc_" color="light" class="mt-2">@lumhc_</Button>
      </Card>

      <Card class="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="100">
        <h3 class="text-xl font-semibold mb-1">Women’s Club Instagram</h3>
        <Button href="https://instagram.com/luwhc_" color="light" class="mt-2">@luwhc_</Button>
      </Card>

      <Card class="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="100">
        <h3 class="text-xl font-semibold mb-1">Dev Instagram</h3>
        <Button href="https://instagram.com/luhc_dev" color="light" class="mt-2">@luhc_dev</Button>
      </Card>
    </div>
  </section>

    <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-2 text-center">Email Options</h2>
    <p class="text-center text-gray-600 mb-4">*Note: Our email accounts are not monitored as regularly as our Instagram accounts.*</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <Card class="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="200">
        <h3 class="text-xl font-semibold mb-2">Email Us</h3>
        <p class="mb-2">General enquiries:</p>
        <Button href="mailto:info@luhc.co.uk" color="light">info@luhc.co.uk</Button>
      </Card>
    </div>
  </section>


  <!-- Contact Form -->
  <!-- <section data-aos="fade-up">
    <h2 class="text-3xl font-bold mb-4 text-center">Send Us a Message</h2>
    <p class="text-center text-gray-700 mb-6">Prefer to write? Use the form below (note: limited to 50 submissions/month).</p>
    <form action="https://formspree.io/f/xeogdbbo" method="POST" class="flex flex-col gap-4">
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label for="name">Name</Label>
          <Input id="name" name="name" type="text" placeholder="Your Name" required />
        </div>
        <div>
          <Label for="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div>
        <Label for="subject">Subject</Label>
        <Input id="subject" name="subject" type="text" placeholder="Subject" required />
      </div>

      <div>
        <Label for="message">Message</Label>
        <Textarea id="message" name="message" rows="4" placeholder="Your message..." required />
      </div>

      <Button type="submit" color="red" class="w-1/2 mx-auto">Send Message</Button>
    </form>
  </section> -->

  <!-- Footer CTA -->
  <!-- <section class="text-center py-8" data-aos="fade-in">
    <h2 class="text-2xl font-bold mb-2">Need Immediate Assistance?</h2>
    <p>If you experience any issues with this page or have an urgent query, please email our Secretary at <a href="mailto:secretary@luhockey.co.uk" class="underline text-red-600">secretary@luhockey.co.uk</a>.</p>
  </section> -->
</div>

<style>
  @media (max-width: 640px) {
    .max-w-4xl { max-width: 90%; }
  }
</style>