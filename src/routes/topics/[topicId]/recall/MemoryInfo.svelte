<script>
  export let memory
  export let visibleMemoryDetails

  const cardDetails = memoryType => {
    switch (memoryType) {
      case 'concept':
        return (
          `<strong>Description</strong>: ${memory.description} <br />` +
          `<strong>Differentiators</strong>: ${memory.differentiators} <br />`
        )
        break
      case 'challenge':
        return `<strong>Answer</strong>: ${memory.answer} <br />`
        break
      case 'principle':
        return `<strong>Description</strong>: ${memory.description} <br />`
    }
  }
</script>

<h2 class="card-title">
  {memory.keywords || memory.prompt || memory.principle}
</h2>
{#if visibleMemoryDetails}
  <p class="card-text">
    {@html cardDetails(memory.type)}
  </p>
{/if}
