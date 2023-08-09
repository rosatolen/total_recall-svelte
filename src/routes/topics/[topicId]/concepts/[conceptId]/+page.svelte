<script>
  import ConceptForm from '../ConceptForm.svelte'
  export let data
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <h3>Edit Concept</h3>
  <ConceptForm defaultValues={{concept: data.concept}} />
</div>
