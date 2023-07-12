<script setup>
import { vOnClickOutside } from '@vueuse/components'
const props = defineProps({
  position: String,
  url: String,
})
const { t } = useI18n()
const options = reactive([
  {
    value: t('language.en'),
  },
  {
    value: t('language.th'),
  },
])
const acceptPolicy = ref(false)
const mail = useMail()
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: props.position,
  language: options[0].value,
  salary: '',
  cv: '',
  options: '',
})
const listUrl = reactive([])

const dropdownSelect = (event) => {
  form.language = event
}

const submit = () => {
  if (acceptPolicy.value && form.firstName !== '' && form.lastName !== '' && form.email !== '' && form.phone !== '' && form.salary !== '') {
    mail.send({
      config: 2,
      from: form.email,
      subject: `You have received a job application email from ${form.email}`,
      text: `
      Name: ${form.firstName} ${form.lastName}
      E-Mail Address: ${form.email}
      Phone Number: ${form.phone}
      Position: ${form.position}
      Preferred Communication Language: ${form.language}
      Salary Expectations: ${form.salary}
      CV Url: ${listUrl}
      Click here for job information https://dexon-technology.com/career-at-dexon/${props.url}
      `,
    }).then((res, err) => {
      if (err) {
        console.log(err)
      }
      else {
        form.firstName = ''
        form.lastName = ''
        form.email = ''
        form.phone = ''
        form.language = options[0].value
        form.salary = ''
        form.cv = ''
        form.options = ''
        acceptPolicy.value = false
        alert('Apply Successfully')
        router.push(localePath({ path: '/thanks-you' }))
      }
    })
  }
  else {
    alert('Please complete the information according to the conditions.')
  }
}

const addUrl = () => {
  if (form.cv !== '') {
    if (listUrl.length < 3)
      listUrl.push(form.cv)

    else
      alert('Maximum url')

    form.cv = ''
  }
}
const removeUrl = (index) => {
  listUrl.splice(index, 1)
}
</script>

<template>
  <div>
    <form>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput id="first_name" v-model="form.firstName" additional-class="py-4" :label="t('career.form.first_name')" required :placeholder="`${$t('career.form.placeholder.enter')} ${$t('career.form.first_name')}`" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput id="last_name" v-model="form.lastName" additional-class="py-4" :label="t('career.form.last_name')" required :placeholder="`${$t('career.form.placeholder.enter')} ${$t('career.form.last_name')}`" />
        </div>
      </div>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput id="email" v-model="form.email" type="email" additional-class="py-4" :label="t('career.form.email')" required :placeholder="`${$t('career.form.placeholder.enter')} ${$t('career.form.email')}`" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput id="phone" v-model="form.phone" type="number" additional-class="py-4" :label="t('career.form.phone')" required :placeholder="`${$t('career.form.placeholder.enter')} ${$t('career.form.phone')}`" />
        </div>
      </div>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full cursor-pointer relative">
          <UIDropdown
            :options="options"
            :label="t('career.form.language')"
            :selected="options[0].value"
            @on-select="dropdownSelect"
          />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput id="salary" v-model="form.salary" type="number" additional-class="py-4" :label="t('career.form.salary')" required :placeholder="`${$t('career.form.placeholder.enter')} ${$t('career.form.salary')}`" />
        </div>
      </div>
      <!-- <div class="mb-custom-md">
        <h3 class="block mb-2 text-sm font-semibold capitalize">
          {{ $t('career.form.upload_title') }}
        </h3>
        <p>
          <span>{{ $t('career.form.upload_subtitle[0].text') }}</span> <span><b>{{ $t('career.form.upload_subtitle[1].text_bold') }}</b></span> <span>{{ $t('career.form.upload_subtitle[2].text') }}</span>
        </p>
      </div> -->
      <div class="mb-custom-lg flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <div v-if="listUrl?.length > 0" class="grid gap-4 mb-custom-md">
            <div v-for="(item, index) in listUrl" :key="item" class="bg-blue-600 py-4 px-4 text-white rounded-md flex items-center mr-4">
              <span>{{ item }}</span>
              <svg class="w-5 h-5 text-white ml-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" @click="removeUrl(index)"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>
            </div>
          </div>
          <UIInput id="cv" v-model="form.cv" v-on-click-outside="addUrl" upload type="text" additional-class="py-4" :label="t('career.form.cv')" required placeholder="Add URL" />
          <!-- <p class="text-xs text-primary/80 mt-2">
            (Up to 3 URLs possible)
          </p> -->
        </div>
        <!-- <div class="lg:w-1/2 w-full">
          <UIInput id="optional" v-model="form.optional" upload type="text" additional-class="py-4" :label="t('career.form.optional')" :placeholder="t('career.form.placeholder.upload_doc')" />
        </div> -->
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input id="terms" v-model="acceptPolicy" type="checkbox" value="" class="accent-secondary-red-100 rounded-md w-4 h-4 border border-primary/10 bg-white" required>
        </div>
        <label for="terms" class="ml-2 text-sm text-primary">{{ $t('career.form.ihave') }} <a href="#" class="text-red-600 hover:underline font-semibold">{{ $t('career.form.privacy') }}</a></label>
      </div>
      <div>
        <UIButton class="rounded-full" size="lg" @click.prevent="submit">
          {{ t('button.submit_app') }}
        </UIButton>
      </div>
    </form>
  </div>
</template>
