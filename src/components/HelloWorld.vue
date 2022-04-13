<template>
  <p>{{ msg }}</p>
</template>

<script>

export default {
  name: 'HelloWorld',

  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>
