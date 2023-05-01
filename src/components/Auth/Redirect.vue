<script setup
  lang="ts">
// https://oauth.yandex.com/authorize?client_id=c32613e342d546fa9759852af80c9f63&redirect_uri=http%3A%2F%2Fapi.kb.x%2Fauth%2Fyandex%2Fcallback&response_type=code&state=6c8f185a4703df2d9e4fd7dee49797f5d16a40ed&token=null
// http://api.kb.x/auth/yandex/callback?state=6c8f185a4703df2d9e4fd7dee49797f5d16a40ed&code=5286259
// http://spa.kb.x/auth/yandex/callback?state=6c8f185a4703df2d9e4fd7dee49797f5d16a40ed&code=5286259

// import { sendAuthCallbackFromProvider } from '@/api/user/providers'

const route = useRoute()
const { state, code } = route.query

/* sendAuthCallbackFromProvider({
  provider: route.params.provider as string,
  state: state as string,
  code: code as string,
})
*/
</script>
