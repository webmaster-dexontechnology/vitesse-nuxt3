<i18n locale="en" src="@/lang/en/contact/index.json"></i18n>

<i18n locale="th" src="@/lang/th/contact/index.json"></i18n>

<script setup>
const { t } = useI18n()
const options1 = [
  {
    value: t('form.fill.service_type[0].value'),
  },
  {
    value: t('form.fill.service_type[1].value'),
  },
  {
    value: t('form.fill.service_type[2].value'),
  },
  {
    value: t('form.fill.service_type[3].value'),
  },
  {
    value: t('form.fill.service_type[4].value'),
  },
  {
    value: t('form.fill.service_type[5].value'),
  },
]
const options2 = [
  {
    value: t('form.fill.preferred[0].value'),
  },
  {
    value: t('form.fill.preferred[1].value'),
  },
  {
    value: t('form.fill.preferred[2].value'),
  },
  {
    value: t('form.fill.preferred[3].value'),
  },
  {
    value: t('form.fill.preferred[4].value'),
  },
  {
    value: t('form.fill.preferred[5].value'),
  },
  {
    value: t('form.fill.preferred[6].value'),
  },
  {
    value: t('form.fill.preferred[7].value'),
  },
]
const acceptPolicy = ref(false)
const mail = useMail()
const form = reactive({
  fullname: '',
  email: '',
  phone: '',
  companyName: '',
  companyAddress: '',
  projectLocation: '',
  serviceType: '',
  preferred: '',
  projectDetail: '',
})

const dropdownSelect1 = (event) => {
  form.serviceType = event
}
const dropdownSelect2 = (event) => {
  form.preferred = event
}

const submit = () => {
  if (acceptPolicy.value && form.name !== '' && form.email !== '' && form.phone !== '') {
    mail.send({
      config: 1,
      from: form.email,
      subject: `You have received new contact email from ${form.email}`,
      text: `
      Name: ${form.fullname}
      email: ${form.email}
      phone: ${form.phone}
      companyName: ${form.companyName}
      companyAddress: ${form.companyAddress}
      projectLocation: ${form.projectLocation}
      serviceType: ${form.serviceType}
      preferred: ${form.preferred}
      projectDetail: ${form.projectDetail}
      `,
    }).then((res, err) => {
      if (err) {
        console.log(err)
      }
      else {
        form.fullname = ''
        form.email = ''
        form.phone = ''
        form.companyName = ''
        form.companyAddress = ''
        form.projectLocation = ''
        form.serviceType = ''
        form.preferred = ''
        form.projectDetail = ''
        acceptPolicy.value = false
        alert('Success subscription')
        router.push(localePath({ path: '/thanks-you' }))
      }
    })
  }
  else {
    alert('Please complete the information according to the conditions.')
  }
}
useHead({
  title: `${t('meta.title')} | Dexon Technology`,
  meta: [
    {
      name: t('meta.description'),
      content: '',
    },
    {
      name: 'keywords',
      content: '',
    },
  ],
})
</script>

<template>
  <div>
    <div
      class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
    >
      {{ t('button.register') }}
    </div>
    <h2 class="xl:text-5xl md:text-4xl text-3xl font-bold mx-auto mb-custom-sm capitalize">
      {{ t('hero.title') }}
    </h2>
    <p>
      {{ t('hero.subtitle') }}
    </p>
    <form>
      <div class="mb-custom-md mt-custom-xl flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.fullname" :label="t('form.fill.fullname')" required :placeholder="t('form.placeholder.fullname')" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.email" :label="t('form.fill.email')" required :placeholder="t('form.placeholder.email')" />
        </div>
      </div>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.phone" type="number" :label="t('form.fill.phone')" required :placeholder="t('form.placeholder.phone')" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.companyName" :label="t('form.fill.company_name')" :placeholder="t('form.placeholder.company_name')" />
        </div>
      </div>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.companyAddress" :label="t('form.fill.company_address')" :placeholder="t('form.placeholder.company_address')" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.projectLocation" :label="t('form.fill.location')" :placeholder="t('form.placeholder.location')" />
        </div>
      </div>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full cursor-pointer relative">
          <UIDropdown
            dropdown-class="max-w-xl"
            :options="options1"
            :label="t('form.placeholder.service_type')"
            :selected="t('form.placeholder.service_type')"
            @on-select="dropdownSelect1"
          />
        </div>
        <div class="lg:w-1/2 w-full cursor-pointer relative">
          <UIDropdown
            dropdown-class="max-w-xl"
            :options="options2"
            :label="t('form.placeholder.preferred_technology')"
            :selected="t('form.placeholder.preferred_technology')"
            @on-select="dropdownSelect2"
          />
        </div>
      </div>
      <div class="mb-custom-lg flex sm:flex-nowrap flex-wrap gap-4">
        <div class="w-full">
          <UITextarea v-model="form.projectDetail" :label="t('form.fill.details')" :placeholder="t('form.placeholder.details')" />
        </div>
      </div>
      <div class="flex items-start mb-custom-lg">
        <div class="flex items-center h-5">
          <input id="terms" v-model="acceptPolicy" type="checkbox" value="" class="cursor-pointer accent-secondary-red-100 rounded-md w-4 h-4 bg-white" required>
          <label for="terms" class="ml-2 text-sm text-primary">{{ $t('training.form.fill.agree') }} <a href="#" class="text-red-600 hover:underline font-semibold">{{ $t('training.form.fill.policy') }}</a></label>
        </div>
      </div>
      <div>
        <UIButton class="rounded-full" size="lg" @click.prevent="submit">
          {{ t('button.submit') }}
        </UIButton>
      </div>
    </form>
  </div>
</template>
