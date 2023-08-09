<script>
  import ChallengeForm from '../ChallengeForm.svelte'
  export let data
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <h3>Edit Challenge</h3>
  <ChallengeForm defaultValues={{challenge: data.challenge}} />
</div>
