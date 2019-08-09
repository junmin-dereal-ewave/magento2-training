<?php

namespace Ewave\MagentoCatalog\Block;

class TestBlock extends \Magento\Framework\View\Element\Template
{
    protected $_postFactory;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context
    ) {
        parent::__construct($context);
    }
}
