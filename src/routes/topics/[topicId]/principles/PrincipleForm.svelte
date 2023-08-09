<script>
  export let defaultValues = null
</script>

<form method="POST">
  <label
    >Principle:
    <input
      name="principle"
      type="text"
      value={defaultValues?.principle ? defaultValues?.principle.principle : ''}
      required
    />
  </label><br />
  <label
    >Description:
    <input
      name="description"
      type="text"
      value={defaultValues?.principle
        ? defaultValues?.principle.description
        : ''}
      required
    />
  </label><br />
  <button>Submit</button>
</form>
