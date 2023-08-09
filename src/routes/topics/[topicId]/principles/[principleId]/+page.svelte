<script>
  import PrincipleForm from '../PrincipleForm.svelte'
  export let data
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <h3>Edit Principle</h3>
  <PrincipleForm defaultValues={{principle: data.principle}} />
</div>
