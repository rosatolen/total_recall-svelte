<script>
  export let data

  let reacall_location = `/topics/${data.topic.id}/recall`
  let concepts_location = `/topics/${data.topic.id}/concepts`
  let challenges_location = `/topics/${data.topic.id}/challenges`
  let principles_location = `/topics/${data.topic.id}/principles`
</script>

<div class="container-fluid text-center">
  <h3>
    {data.topic.title}
  </h3>
  <ul class="list-group">
    <a class="list-group-item" href={reacall_location}>Recall</a>
    <a class="list-group-item" href={concepts_location}>Concepts</a>
    <a class="list-group-item" href={challenges_location}>Challenges</a>
    <a class="list-group-item" href={principles_location}>Principles</a>
  </ul>
</div>
