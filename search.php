<?php require_once 'header.php'; require_once 'games.php';
$q = isset($_GET['q']) ? trim($_GET['q']) : '';
$q_lower = mb_strtolower($q);
$filtered = array_filter($games, function($g) use($q_lower) {
  return strpos(mb_strtolower($g['title']), $q_lower) !== false
    || strpos(mb_strtolower($g['description']), $q_lower) !== false
    || (isset($g['genres'])&&strpos(mb_strtolower(join(' ', $g['genres'])), $q_lower) !== false)
    || (isset($g['categories'])&&strpos(mb_strtolower(join(' ', $g['categories'])), $q_lower) !== false)
    || (isset($g['platforms'])&&strpos(mb_strtolower(join(' ', $g['platforms'])), $q_lower) !== false);
});
?><main>
  <div class='hero'><div class='hero-main'>Search: "<?=htmlspecialchars($q)?>"</div><div class='hero-desc'>Results for your query</div></div>
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
