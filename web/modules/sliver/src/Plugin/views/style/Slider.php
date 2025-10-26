<?php

declare(strict_types=1);

namespace Drupal\sliver\Plugin\views\style;

use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\views\Attribute\ViewsStyle;
use Drupal\views\Plugin\views\style\StylePluginBase;

/**
 * Slider style plugin.
 */
#[ViewsStyle(
  id: 'sliver_slider',
  title: new TranslatableMarkup('Slider'),
  help: new TranslatableMarkup('@todo Add help text here.'),
  theme: 'views_style_sliver_slider',
  display_types: ['normal'],
)]
final class Slider extends StylePluginBase {

  /**
   * {@inheritdoc}
   */
  protected $usesRowPlugin = TRUE;

  /**
   * {@inheritdoc}
   */
  protected $usesRowClass = TRUE;

}
