<script>
  import ChallengeForm from './ChallengeForm.svelte'
  export let data
  let topic = data.topic
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <h3>Add Challenge</h3>
  <ChallengeForm />

  <h3>Challenges</h3>
  <ul class="list-group">
    {#each data.topic.challenges as { id, prompt, answer }}
      <a
        href={`/topics/${topic.id}/challenges/${id}`}
        class="list-group-item list-group-item-action"
      >
        <h6>Prompt: {prompt}</h6>
        <h6>Answer: {answer}</h6>
      </a>
    {:else}
      <h6>No challenges</h6>
    {/each}
  </ul>
</div>
