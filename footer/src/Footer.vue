<template>
  <div id="footer">
    <p class="text-muted text-center small">
      <em>
        <span v-if="additionalMessage">{{additionalMessage}}<br/></span>
        This database was generated using the open source <a :href="'https://www.molgenis.org'">MOLGENIS
        database generator</a> <span v-if="version">{{version}}</span> <span v-if="buildDate">built
        on {{buildDate}}</span>.<br/>Please cite <a
          :href="'https://www.ncbi.nlm.nih.gov/pubmed/21210979'">Swertz et al (2010)</a> or <a
          :href="'https://www.ncbi.nlm.nih.gov/pubmed/17297480'">Swertz &amp; Jansen (2007)</a> on use.</em>
    </p>
  </div>
</template>

<style lang="scss">
  #footer, #footer * {
    bottom: 0;
    text-align: center;
    font-size: 16px;
    color: #ccc;
    font-style: italic;
    margin-top: 0;
  }
</style>

<script>
  export default {
    name: 'footer',
    data: function () {
      return {
        additionalMessage: window.__INITIAL_STATE__.additionalMessage,
        version: window.__INITIAL_STATE__.version,
        buildDate: window.__INITIAL_STATE__.buildDate
      }
    }
  }
</script>
