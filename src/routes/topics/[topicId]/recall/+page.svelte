<script>
  import MemoryInfo from './MemoryInfo.svelte'
  export let data

  let memoryIndex = 0
  $: memory = data.memories[memoryIndex]
  const nextMemory = () => {
    memoryIndex += 1
    memory = data.memories[memoryIndex]
  }

  $: visibleMemoryDetails = false
  const toggleVisibleMemoryDetails = () => {
    visibleMemoryDetails = !visibleMemoryDetails
  }
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <div class="card">
    {#if memory}
      <div class="card-body">
        <MemoryInfo {memory} {visibleMemoryDetails} />
        <div class="btn-group" role="group">
          <button class="btn btn-light" on:click={toggleVisibleMemoryDetails}
            >{visibleMemoryDetails ? 'Hide' : 'Show'} Details</button
          >
          <form method="POST">
            <button
              type="submit"
              name="memoryForgotten"
              value="memoryForgotten"
              class="btn btn-outline-success">No</button
            >
            <button
              type="submit"
              name="memoryRemembered"
              value="memoryRemembered"
              class="btn btn-outline-secondary">Yes</button
            >
          </form>
        </div>
      </div>
      <button
        class="btn"
        on:click={() => {
          nextMemory()
          visibleMemoryDetails = false
        }}
      >
        <i class="bi bi-arrow-right next-memory-btn" />
      </button>
    {:else}
      <div class="card-body">
        {#if data.memories}
          <h5 class="card-title">No more memories to recall!</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            Checkout your new score
          </h6>
        {:else}
          <h5 class="card-title">Nothing to recall!</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            Please add concepts, challenges, or pinciples to this topic.
          </h6>
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .next-memory-btn {
    font-size: 2rem;
    color: #198754;
  }
</style>
