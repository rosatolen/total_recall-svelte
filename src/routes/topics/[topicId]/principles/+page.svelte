<script>
  import PrincipleForm from './PrincipleForm.svelte'
  export let data
  let topic = data.topic
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <h3>Add Principle</h3>
  <PrincipleForm />

  <h3>Principles</h3>
  <ul class="list-group">
    {#each topic.principles as { id, principle, description }}
      <a
        href={`/topics/${topic.id}/principles/${id}`}
        class="list-group-item list-group-item-action"
      >
        <h4>Principle: {principle}</h4>
        <h4>Description: {description}</h4>
      </a>
    {:else}
      <h4>No principles</h4>
    {/each}
  </ul>
</div>
