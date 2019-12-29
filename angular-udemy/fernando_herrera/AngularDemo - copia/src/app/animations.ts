import { trigger, transition, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation =
   trigger('routeAnimations', [
        transition('Contact => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),        
             group([
                  query(':enter',[
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform:   'translateX(0%)'}),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(100%)' }))
                  ], { optional: true }),
             ])
        ]),
        transition('Home => *', [
             query(':enter, :leave', 
                  style({ position: 'fixed',  width: '100%' }), 
                  { optional: true }),
             group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }), 
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                      ], { optional: true }),
              ])
        ]),
        transition('LineasPage => BarrasPage', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.1s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.1s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        transition('BarrasPage => LineasPage', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.1s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.1s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
      ])
])

export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);


export const transformer =
  trigger('routeAnimations', [
    transition('* => isLeft', translateTo({ x: -100, y: -100, rotate: -720 }) ),
    transition('* => isRight', translateTo({ x: 100, y: -100, rotate: 90 }) ),
    transition('isRight => *', translateTo({ x: -100, y: -100, rotate: 360 }) ),
    transition('isLeft => *', translateTo({ x: 100, y: -100, rotate: -360 }) )
]);

  function slideTo(direction) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('600ms ease-in-out', style({ [direction]: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('600ms ease-in-out', style({ [direction]: '0%'}))
        ])
      ]),
      // Normalize the page style... Might not be necessary
  
      // Required only if you have child animations on the page
      query(':leave', animateChild(), { optional: true }),
      query(':enter', animateChild()),
    ];
  }//cubic-bezier(0.55, 0.31, 0.15, 0.93)

  function translateTo({x = 100, y = 0, rotate = 0}) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
      ]),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
        ], optional),
        query(':enter', [
          animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
        ])
      ]),
    ];
  }