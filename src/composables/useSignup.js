import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// global state of error. reset error state so that not shared with other error
const error = ref(null)
const isPending = ref(false)

// signup function
const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await res.user.updateProfile({ displayName })
    error.value = null
    isPending.value = false

    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup