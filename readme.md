# Js-slider
Slider developed by Simon Elmqvist @Camelonta to use as a light weight carousel.

## Introduction 
The simplest vanilla javascript and css library for carousel/slider functionality.
Easy transitions with css transform.

## Getting Started
Render HTML in the following syntax:
```
<section class="slider">
    <div class="slider-wrapper">
        <div class="slide">
            <h2>Slide content</h2>
        </div>
    </div>
    <a class="prev inactive" href="javascript:void(0);">&#10094;</a>
    <a class="next" href="javascript:void(0);">&#10095;</a>
</section>
```
## Options
```
{
    slider: 'Slider section element',
    atStart: 'Function that fires when slider reaches start point',
    atEnd: 'Function that fires when slider reaches end point'
}
```
Use your own logics to attach buttons to slide events, see examples (https://github.com/simonelmqvist/js-slider/blob/master/examples/example1/index.html).

## Contribute
Please make PR to contribute to better code.