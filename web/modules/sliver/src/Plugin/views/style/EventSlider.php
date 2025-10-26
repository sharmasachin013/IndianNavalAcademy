<?php

declare(strict_types=1);

namespace Drupal\sliver\Plugin\views\style;

use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\views\Attribute\ViewsStyle;
use Drupal\views\Plugin\views\style\StylePluginBase;

/**
 * Event Slider style plugin.
 */
#[ViewsStyle(
  id: 'sliver_event_slider',
  title: new TranslatableMarkup('Event Slider'),
  help: new TranslatableMarkup('@todo Add help text here.'),
  theme: 'views_style_sliver_event_slider',
  display_types: ['normal'],
)]
final class EventSlider extends StylePluginBase {

  /**
   * {@inheritdoc}
   */
  protected $usesRowPlugin = TRUE;

  /**
   * {@inheritdoc}
   */
  protected $usesRowClass = TRUE;

}
