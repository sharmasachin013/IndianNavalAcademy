<?php

declare(strict_types=1);

namespace Drupal\sliver\Plugin\views\style;

use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\views\Attribute\ViewsStyle;
use Drupal\views\Plugin\views\style\StylePluginBase;

/**
 * What&#039;s new style plugin.
 */
#[ViewsStyle(
  id: 'sliver_what_s_new',
  title: new TranslatableMarkup('What&#039;s new'),
  help: new TranslatableMarkup('@todo Add help text here.'),
  theme: 'views_style_sliver_what_s_new',
  display_types: ['normal'],
)]
final class WhatSNew extends StylePluginBase {

  /**
   * {@inheritdoc}
   */
  protected $usesRowPlugin = TRUE;

  /**
   * {@inheritdoc}
   */
  protected $usesRowClass = TRUE;

}
