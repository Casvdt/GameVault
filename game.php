<?php require_once 'header.php'; require_once 'games.php';
$slug = isset($_GET['slug']) ? $_GET['slug'] : null;
$game = null;
foreach($games as $g) if($g['slug'] === $slug) {$game=$g; break;}
?><main>
<?php if(!$game): ?>
  <div class='hero'><div class='hero-main'>Not found</div><div class='hero-desc'>No game by that slug.</div></div>
<?php else: ?>
  <div class='hero'><div class='hero-main'><?=htmlspecialchars($game['title'])?></div><div class='hero-desc'><?=isset($game['genres'])?join(', ', $game['genres']) : ''?></div></div>
  <div style='max-width:680px;margin:2vw auto 0 auto;padding:2em 1em 1.5em 1em;background:var(--glass-bg);border-radius:var(--radius-lg);box-shadow:var(--shadow-main);'>
    <img src='<?=htmlspecialchars($game['image'])?>' class='card-img-top' style='width:100%;border-radius:var(--radius-md)'><br>
    <div class='card-body' style='padding:0 0 .5em 0'>
      <h2 class='card-title' style='font-size:2.2rem;'><?=htmlspecialchars($game['title'])?></h2>
      <div style='padding:.4em 0 .8em 0;color:var(--text-sub)'><?=isset($game['genres'])?join(', ', $game['genres']):''?></div>
      <div><b>Platforms:</b> <?=isset($game['platforms']) ? join(' | ', $game['platforms']) : ''?></div>
      <div><b>Categories:</b> <?=isset($game['categories']) ? join(' | ', $game['categories']) : ''?></div>
      <p style='margin-top:1em;color:var(--text-main);'><?=htmlspecialchars($game['description'])?></p>
      <a href='index.php' style='display:inline-block;margin-top:.6em;padding:.62em 1.2em;font-weight:600;background:var(--accent);color:#fff;border:none;border-radius:9px;box-shadow:0 2px 16px -8px #800a13bb;text-decoration:none'>← Back to Games</a>
    </div>
  </div>
<?php endif; ?>
</main><?php require_once 'footer.php'; ?>
