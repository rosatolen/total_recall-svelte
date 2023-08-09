<script>
  import ConceptForm from './ConceptForm.svelte'
  export let data
  let topic = data.topic
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <h3>Add Concept</h3>
  <ConceptForm />

  <h3>Concepts</h3>
  <ul class="list-group">
    {#each topic.concepts as { id, keywords, description, differentiators }}
      <a
        href={`/topics/${topic.id}/concepts/${id}`}
        class="list-group-item list-group-item-action"
      >
        <h6>Keywords: {keywords}</h6>
        <h6>Description: {description}</h6>
        <h6>Differentiators: {differentiators}</h6>
      </a>
    {:else}
      <h6>No concepts</h6>
    {/each}
  </ul>
</div>
