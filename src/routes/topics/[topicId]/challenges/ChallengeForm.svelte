<script>
  export let defaultValues = null
</script>

<form method="POST">
  <label
    >Prompt:
    <input
      name="prompt"
      type="text"
      value={defaultValues?.challenge ? defaultValues?.challenge.prompt : ''}
      required
    />
  </label><br />
  <label
    >Answer:
    <input
      name="answer"
      type="text"
      value={defaultValues?.challenge ? defaultValues?.challenge.answer : ''}
    />
  </label><br />
  <button>Submit</button>
</form>
