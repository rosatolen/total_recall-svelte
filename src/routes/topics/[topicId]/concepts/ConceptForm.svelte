<script>
  export let defaultValues = null
</script>

<form method="POST">
  <label
    >Keywords:
    <input
      name="keywords"
      type="text"
      value={defaultValues?.concept ? defaultValues?.concept.keywords : ''}
      required
    />
  </label><br />
  <label
    >Description:
    <input
      name="description"
      type="text"
      value={defaultValues?.concept ? defaultValues?.concept.description : ''}
      required
    />
  </label><br />
  <label
    >Differentiators:
    <input
      name="differentiators"
      type="text"
      value={defaultValues?.concept
        ? defaultValues?.concept.differentiators
        : ''}
    />
  </label><br />
  <button>Submit</button>
</form>
