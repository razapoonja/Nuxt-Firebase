<template>
  <div>
    <h3>Secret Page</h3>
  </div>
</template>

<script>
    import * as firebase from 'firebase/app'
    import 'firebase/auth'
    import { getUserFromCookie, getUserFromSession } from '@/helpers'

    export default {
        asyncData({ req, redirect }) {
            if (process.server) {
                const user = getUserFromCookie(req)

                if (!user)
                    redirect('/login')
            } else {
                var user = firebase.auth().currentUser
                
                if (!user)
                    redirect('/login')
            }
        }
    }
</script>