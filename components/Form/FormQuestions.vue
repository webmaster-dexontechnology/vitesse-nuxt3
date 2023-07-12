<script setup>
defineProps({
  content: Object,
})
const { t } = useI18n()
const options = ref([
  {
    value: 'Inline Inspection Services (Pigging)',
  },
  {
    value: 'Conventional NDT',
  },

  {
    value: 'Advanced NDT',
  },

  {
    value: 'Training',
  },

  {
    value: 'Asset Integrity',
  },
])
const testimonial = ref([
  {
    review: t('testimonial[0].review'),
    author: t('testimonial[0].author'),
    position: t('testimonial[0].position'),
  },
  {
    review: t('testimonial[1].review'),
    author: t('testimonial[1].author'),
  },
  {
    review: t('testimonial[2].review'),
    author: t('testimonial[2].author'),
  },
])
const selected = ref(t('form.question.fill.service.placeholder'))
const mail = useMail()
const form = reactive({
  fullname: '',
  company: '',
  email: '',
  phone: '',
  tellus: '',
})

const submit = () => {
  if (form.fullname !== '' && form.company !== '' && form.email !== '' && form.phone !== '' && selected.value !== t('form.question.fill.service.placeholder')) {
    mail.send({
      config: 0,
      from: form.email,
      subject: `You have received a questions email from ${form.email}`,
      text: `
      Name: ${form.fullname}
      Company Number: ${form.company}
      E-Mail Address: ${form.email}
      Phone Number: ${form.phone}
      Service: ${selected.value}
      Text: ${form.tellus}
      `,
    }).then((res, err) => {
      if (err) {
        console.log(err)
      }
      else {
        form.fullname = ''
        form.company = ''
        form.email = ''
        form.phone = ''
        form.tellus = ''
        selected.value = t('form.question.fill.service.placeholder')
        alert('Apply Successfully')
      }
    })
  }
  else {
    router.push(localePath({ path: '/thanks-you' }))
    // alert('Please complete the information according to the conditions.')
  }
}

const dropdownSelected = (event) => {
  selected.value = event
}
</script>

<template>
  <div class="lg:py-desktop py-mobile bg-primary relative">
    <div class="overflow-hidden 2xl:min-h-[550px] lg:min-h-[450px] sm:min-h-[250px] min-h-[200px] 2xl:min-w-[550px] lg:min-w-[450px] sm:min-w-[250px] min-w-[200px] z-0 absolute right-0 bottom-0 origin-center -z-1">
      <DecorlationRstriped current-color="text-secondary-red-100" class="origin-center h-full w-auto mix-blend-darken bottom-0 translate-x-0 z-0" />
    </div>
    <div class="container relative">
      <div class="grid lg:grid-cols-2">
        <div class="w-full">
          <div
            class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
          >
            {{ $t('form.question.heading') }}
          </div>
          <h2 class="text-white xl:text-5xl md:text-4xl text-3xl font-bold mx-auto mb-custom-md">
            {{ $t('form.question.title1') }}<br>
            {{ $t('form.question.title2') }}
          </h2>
          <p class="text-white/80 text-xl leading-[1.6] mb-custom-xl">
            {{ $t('form.question.subtitle') }}
          </p>
          <div id="questions-form">
            <form>
              <div class="mb-10 flex sm:flex-nowrap flex-wrap gap-x-10">
                <div class="lg:w-1/2 w-full">
                  <UIInput
                    v-model="form.fullname"
                    label-class="block mb-1 text-md font-medium capitalize text-white/60"
                    custom-class="autofill:shadow-red-500 text-lg transition duration-200 hover:border-secondary-red-100
                      placeholder-white placeholder:font-semibold pb-3 py-2 pl-0 text-white shadow-sm
                      bg-transparent block w-full border-b border-secondary-gray-100/50"
                    :label="t('form.question.fill.name.label')" required :placeholder="t('form.question.fill.name.placeholder')"
                  />
                </div>
                <div class="lg:w-1/2 w-full">
                  <UIInput
                    v-model="form.company"
                    label-class="block mb-1 text-md font-medium capitalize text-white/60"
                    custom-class="autofill:shadow-red-500 text-lg transition duration-200 hover:border-secondary-red-100
                      placeholder-white placeholder:font-semibold pb-3 py-2 pl-0 text-white shadow-sm
                      bg-transparent block w-full border-b border-secondary-gray-100/50"
                    :label="t('form.question.fill.company.label')" required :placeholder="t('form.question.fill.company.placeholder')"
                  />
                </div>
              </div>
              <div class="mb-10 flex sm:flex-nowrap flex-wrap gap-x-10">
                <div class="lg:w-1/2 w-full">
                  <UIInput
                    v-model="form.email"
                    label-class="block mb-1 text-md font-medium capitalize text-white/60"
                    custom-class="autofill:shadow-red-500 text-lg transition duration-200 hover:border-secondary-red-100
                      placeholder-white placeholder:font-semibold pb-3 py-2 pl-0 text-white shadow-sm
                      bg-transparent block w-full border-b border-secondary-gray-100/50"
                    :label="t('form.question.fill.email.label')" required placeholder="yourname@email.com"
                  />
                </div>
                <div class="lg:w-1/2 w-full">
                  <UIInput
                    v-model="form.phone"
                    type="number"
                    label-class="block mb-1 text-md font-medium capitalize text-white/60"
                    custom-class="autofill:shadow-red-500 text-lg transition duration-200 hover:border-secondary-red-100
                      placeholder-white placeholder:font-semibold pb-3 py-2 pl-0 text-white shadow-sm
                      bg-transparent block w-full border-b border-secondary-gray-100/50"
                    :label="t('form.question.fill.phone.label')" required :placeholder="t('form.question.fill.phone.placeholder')"
                  />
                </div>
              </div>
              <div class="mb-10 flex sm:flex-nowrap flex-wrap gap-x-10">
                <div class="w-full cursor-pointer relative">
                  <UIDropdown
                    :options="options"
                    :label="t('form.question.fill.service.label')"
                    :selected="selected"
                    label-class="block mb-1 text-md font-medium capitalize text-white/60"
                    label-select="autofill:shadow-red-500 text-lg transition duration-200 hover:border-secondary-red-100 font-semibold text-white"
                    select-class="flex items-center text-left autofill:shadow-red-500 text-lg transition duration-200 hover:border-secondary-red-100 pb-3 py-2 pl-0 text-white shadow-sm bg-transparent w-full border-b border-secondary-gray-100/50"
                    required
                    @on-select="dropdownSelected"
                  />
                </div>
              </div>
              <div class="mb-10 flex sm:flex-nowrap flex-wrap gap-x-10">
                <div class="w-full">
                  <UITextarea
                    v-model="form.tellus"
                    type="number"
                    rows="3"
                    label-class="block mb-1 text-md font-medium capitalize text-white/60"
                    custom-class="autofill:shadow-red-500 text-lg transition duration-200 hover:border-secondary-red-100
                      placeholder-white placeholder:font-semibold pb-3 py-2 pl-0 text-white shadow-sm
                      bg-transparent block w-full border-b border-secondary-gray-100/50"
                    :label="t('form.question.fill.tellus.label')" :placeholder="t('form.question.fill.tellus.placeholder')"
                  />
                </div>
              </div>
            </form>
          </div>
          <div>
            <UIButton class="rounded-full" size="lg" @click.prevent="submit">
              {{ t('button.questions') }}
            </UIButton>
          </div>
        </div>
        <div class="w-full lg:pl-20 lg:mt-0 mt-custom-xl">
          <div class="flex flex-col gap-y-10">
            <div
              v-for="item in testimonial" :key="item"
              class="bg-white rounded-lg shadow-custom-xl p-8 w-full relative"
            >
              <div class="bg-secondary-red-100 rounded-md absolute translate-x-[-50%] left-0 top-5 w-[45px] h-[45px] flex items-center justify-center">
                <svg class="text-white h-full w-full" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10 7l-2 4h3v6H5v-6l2-4h3m8 0l-2 4h3v6h-6v-6l2-4h3Z" /></svg>
              </div>
              <p class="text-sm font-medium leading-[1.7]">
                {{ item.review }}
              </p>
              <div class="border-b border-secondary-gray-300 w-full my-custom-sm" />
              <div class="flex sm:flex-row flex-col sm:items-center gap-x-10 gap-y-6">
                <div class="flex flex-col">
                  <div class="text-lg text-primary font-bold">
                    {{ item.author }}
                  </div>
                  <div v-if="item.position" class="text-sm text-secondary-red-100 font-medium">
                    {{ item.position }}
                  </div>
                </div>
                <div class="flex sm:ml-auto">
                  <div><svg class="text-secondary-red-100" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" /></svg></div>
                  <div><svg class="text-secondary-red-100" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" /></svg></div>
                  <div><svg class="text-secondary-red-100" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" /></svg></div>
                  <div><svg class="text-secondary-red-100" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" /></svg></div>
                  <div><svg class="text-secondary-red-100" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" /></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
