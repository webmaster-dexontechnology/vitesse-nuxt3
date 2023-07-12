<script setup>
const props = defineProps({
  inputClass: {
    type: String,
    default: '',
  },
  formClass: {
    type: String,
    default: '',
  },
  buttonClass: {
    type: String,
    default: '',
  },
})
const { t } = useI18n()
const mail = useMail()
const form = reactive({
  email: '',
})

const sendMail = () => {
  if (form.email !== '') {
    mail.send({
      config: 0,
      from: form.email,
      subject: t('footer.follow.subscribe'),
      text: `Received newsletter subscription from ${form.email}`,
    }).then((res, err) => {
      if (err) {
        console.log(err)
      }
      else {
        form.email = ''
        alert('Success subscription')
        router.push(localePath({ path: '/thanks-you' }))
      }
    })
  }
  else {
    alert('Please enter your email address')
  }
}
</script>

<template>
  <div class="relative flex justify-center items-center w-full">
    <form class="w-full relative max-w-xs" :class="props.formClass ? props.formClass : 'mr-auto'" @submit.prevent="sendMail">
      <UIInput
        v-model="form.email"
        class="w-full input"
        type="text"
        :custom-class="`${props.inputClass} text-sm py-3 px-4 text-md relative z-0 shadow-shadow-light/10 shadow-custom-lg rounded-full w-full text-secondary-gray-500 font-medium placeholder:text-secondary-gray-500 placeholder:font-medium`"
        :placeholder="t('footer.follow.email')"
      />
      <button
        type="submit"
        :class="props.buttonClass"
        class="
          absolute inset-y-0 right-0 z-1 ring-secondary-red-100/25 hover:ring-4 transition duration-200 ease-out font-semibold
          items-center rounded-full bg-red-gradient text-white whitespace-nowrap m-auto text-sm py-3 px-6"
      >
        {{ t('button.submit') }}
      </button>
    </form>
  </div>
</template>
