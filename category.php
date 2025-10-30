<?php require_once 'header.php'; require_once 'games.php';
$type = isset($_GET['type']) ? $_GET['type'] : 'Action';
$typeSafe = htmlspecialchars($type);
$filtered = array_filter($games, function($g) use ($type) {
  return in_array($type, $g['categories'] ?? []) || ($g['category'] ?? null) === $type;
});
?><main>
  <div class='hero'><div class='hero-main'><?=$typeSafe?> Games</div><div class='hero-desc'>Browse all <?=$typeSafe?> titles:</div></div>
  <section class='games-grid'>
    <?php foreach($filtered as $game): ?>
      <div class='col-12 col-sm-6 col-lg-3'>
        <div class='card game-tile h-100' tabindex='0' onclick="location.href='game.php?slug=<?=urlencode($game['slug'])?>'">
          <img class='card-img-top' src='<?=htmlspecialchars($game['image'])?>' alt='<?=htmlspecialchars($game['title'])?>'>
          <div class='card-body'><h5 class='card-title'><?=htmlspecialchars($game['title'])?></h5></div>
        </div>
      </div>
    <?php endforeach; ?>
  </section>
</main><?php require_once 'footer.php'; ?>
