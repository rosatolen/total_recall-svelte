<script>
  export let data
</script>

<div class="container-fluid text-center">
  <h3>Score: {data.score}</h3>
  <ul class="list-group">
    <li class="list-group-item d-flex">
      <div class="ms-2 me-auto fw-bold">
        <h4>Topics</h4>
      </div>
      <a class="btn btn-success" href="/topics">+Topic</a>
    </li>
    {#each data.topics as topic}
      <a
        href={`/topics/${topic.id}`}
        class="list-group-item list-group-item-action"
      >
        {topic.title}
      </a>
    {/each}
  </ul>
</div>
