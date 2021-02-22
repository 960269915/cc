<template>
  <div>
    11
    <Suspense>
      <template #default>
        <asyncCom />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { asyncCom } from "./async";
export default {
  components: {
    asyncCom,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
