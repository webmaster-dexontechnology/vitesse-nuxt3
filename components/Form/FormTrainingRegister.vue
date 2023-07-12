<i18n locale="en" src="@/lang/en/dexon-training-center/training-course.json"></i18n>

<i18n locale="th" src="@/lang/th/dexon-training-center/training-course.json"></i18n>

<script setup>
const { rt, tm, t, localePath } = useI18n()
const route = useRoute()
const router = useRouter()
const otherCourseOptions = reactive([
  {
    value: t('training.form.fill.select_other_course'),
  },
  {
    value: 'API',
  },
  {
    value: 'ASME',
  },
  {
    value: 'NDT',
  },
  {
    value: 'GWO',
  },
  {
    value: 'IRATA',
  },
  {
    value: 'FIRST ADD',
  },
  {
    value: 'ALL',
  },
])
const trainingCourseOptions = reactive([
  {
    value: t('training.form.fill.select_course'),
  },
  {
    id: t('training_course.course[0].id'),
    value: t('training_course.course[0].title'),
  },
  {
    id: t('training_course.course[1].id'),
    value: t('training_course.course[1].title'),
  },
  {
    id: t('training_course.course[2].id'),
    value: t('training_course.course[2].title'),
  },
  {
    id: t('training_course.course[3].id'),
    value: t('training_course.course[3].title'),
  },
  {
    id: t('training_course.course[4].id'),
    value: t('training_course.course[4].title'),
  },
  {
    id: t('training_course.course[5].id'),
    value: t('training_course.course[5].title'),
  },
  {
    id: t('training_course.course[6].id'),
    value: t('training_course.course[6].title'),
  },
  {
    id: t('training_course.course[7].id'),
    value: t('training_course.course[7].title'),
  },
  {
    id: t('training_course.course[8].id'),
    value: t('training_course.course[8].title'),
  },
  {
    id: t('training_course.course[9].id'),
    value: t('training_course.course[9].title'),
  },
  {
    id: t('training_course.course[10].id'),
    value: t('training_course.course[10].title'),
  },
  {
    id: t('training_course.course[11].id'),
    value: t('training_course.course[11].title'),
  },
  {
    id: t('training_course.course[12].id'),
    value: t('training_course.course[12].title'),
  },
  {
    id: t('training_course.course[13].id'),
    value: t('training_course.course[13].title'),
  },
])
const acceptPolicy = ref(false)
const mail = useMail()
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  participants: '',
  preferred: '',
  otherCourse: '',
  checkbox: [],
})

const schedule = tm('training_schedule.schedule')

const filteredCourses = () => {
  for (let i = 0; i < trainingCourseOptions.length; i++) {
    const course = trainingCourseOptions[i]
    if (route.query.course === course.id)
      return course
  }
}

const trainingCourse = ref(filteredCourses())

const dropdownTrainingCourses = (event) => {
  trainingCourse.value = event
}

const dropdownOtherCourses = (event) => {
  form.otherCourse = event
}

const submit = () => {
  if (acceptPolicy.value && form.firstName !== '' && form.lastName !== '' && form.email !== '' && form.phone !== '' && trainingCourse.value !== trainingCourseOptions[0].value) {
    mail.send({
      config: 0,
      from: form.email,
      subject: `You have received a training register application email from ${form.email}`,
      text: `
      Name: ${form.firstName} ${form.lastName}
      E-Mail Address: ${form.email}
      Phone Number: ${form.phone}
      Training Course: ${trainingCourse.value}
      Other Courses: ${form.otherCourse}
      Number of participants: ${form.participants}
      Preferred Training Coursesd: ${form.preferred}
      Training Schedule: ${form.checkbox}
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
        form.participants = ''
        form.preferred = ''
        form.checkbox = []
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

useHead({
  title: `${t('training.form.title').charAt(0).toUpperCase() + t('training.form.title').slice(1)} | Dexon Technology`,
  meta: [
    {
      name: 'description',
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
      {{ $t('button.register') }}
    </div>
    <h2 class="xl:text-5xl md:text-4xl text-3xl font-bold mx-auto mb-custom-xl capitalize">
      {{ $t('training.form.title') }}
    </h2>
    <form>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.firstName" :label="t('training.form.fill.first_name')" required :placeholder="t('training.form.placeholder.first_name')" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.lastName" :label="t('training.form.fill.last_name')" required :placeholder="t('training.form.placeholder.last_name')" />
        </div>
      </div>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.email" :label="t('training.form.fill.email')" required :placeholder="t('training.form.placeholder.email')" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.phone" type="number" :label="t('training.form.fill.phone')" required :placeholder="t('training.form.placeholder.phone')" />
        </div>
      </div>
      <div class="mb-custom-md flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full cursor-pointer relative">
          <UIDropdown
            :options="trainingCourseOptions"
            :label="t('training.form.fill.training_course')"
            :selected="trainingCourse.value"
            required
            @on-select="dropdownTrainingCourses"
          />
        </div>
        <div class="lg:w-1/2 w-full cursor-pointer relative">
          <UIDropdown
            :options="otherCourseOptions"
            :label="t('training.form.fill.other_course')"
            :selected="otherCourseOptions[0].value"
            @on-select="dropdownOtherCourses"
          />
        </div>
      </div>
      <div class="mb-custom-md mt-custom-xl flex sm:flex-nowrap flex-wrap gap-4">
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.participants" type="number" :label="t('training.form.fill.participants')" :placeholder="t('training.form.placeholder.participants')" />
        </div>
        <div class="lg:w-1/2 w-full">
          <UIInput v-model="form.preferred" :label="t('training.form.fill.preferred')" :placeholder="t('training.form.placeholder.preferred')" />
        </div>
      </div>
      <div class="mb-5 flex sm:flex-nowrap flex-wrap gap-4">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          <div v-for="item in schedule" :key="item">
            <p v-if="item.type" class="block mb-custom-sm text-sm font-semibold capitalize text-primary">
              {{ rt(item.type) }}
            </p>
            <div v-for="list in item.detail" :key="list" class="sm:mb-custom-sm mb-custom-md">
              <div class="flex items-center h-5 leading-[1.5]">
                <input :id="list.about.id" v-model="form.checkbox" :value="rt(list.about.title)" type="checkbox" class="accent-secondary-red-100 rounded-md w-4 h-4 bg-white">
                <label :for="list.about.id" class="ml-2 text-sm text-primary">{{ rt(list.about.title) }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input id="terms" v-model="acceptPolicy" type="checkbox" class="accent-secondary-red-100 rounded-md w-4 h-4 border border-primary/10 bg-white" required>
        </div>
        <label for="terms" class="ml-2 text-sm font-semibold text-primary">{{ $t('training.form.fill.agree') }} <a href="#" class="text-red-600 hover:underline">{{ $t('training.form.fill.policy') }}</a></label>
      </div>
      <div>
        <UIButton class="rounded-full" size="lg" @click.prevent="submit">
          {{ t('button.submit') }}
        </UIButton>
      </div>
    </form>
  </div>
</template>
