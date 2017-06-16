<template>
    <div>
        Cool header {{message}}
    </div>
</template>

<script>
    export default {
      name: 'header',
      data: function () {
        return {
          message: 'Test'
        }
      }
    }
</script>