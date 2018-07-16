<template>
  <footer class="footer">
    <div class="container">
      <p class="font-italic text-muted text-center">
        <span v-if="additionalMessage">
          {{additionalMessage}}<br/>
        </span>

        This database was generated using the open source <a :href="molgenisSite">MOLGENIS database generator</a> <span v-if="version">{{version}}</span> <span v-if="buildDate">built on {{buildDate}}.</span>
        <br/> Please cite <a :href="pubmed1">Swertz et al (2010)</a> or <a :href="pubmed2">Swertz &amp; Jansen (2007)</a> on use.
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'molgenis-footer',
    data: function () {
      return {
        additionalMessage: window.molgenisFooter.additionalMessage,
        version: window.molgenisFooter.version,
        buildDate: window.molgenisFooter.buildDate,
        molgenisSite: 'http://www.molgenis.org',
        pubmed1: 'https://www.ncbi.nlm.nih.gov/pubmed/21210979',
        pubmed2: 'https://www.ncbi.nlm.nih.gov/pubmed/17297480'
      }
    }
  }
</script>
