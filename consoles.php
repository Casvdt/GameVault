<?php require_once 'header.php'; require_once 'games.php';
$platform = isset($_GET['platform']) ? $_GET['platform'] : 'PC';
$platformSafe = htmlspecialchars($platform);
$filtered = array_filter($games, function($g) use ($platform) {
  return in_array($platform, $g['platforms'] ?? []);
});
?><main>
  <div class='hero'><div class='hero-main'><?=$platformSafe?> Games</div><div class='hero-desc'>For <?=$platformSafe?> gamers!</div></div>
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
