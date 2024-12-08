import { trigger, transition, style, query, group, animate } from '@angular/animations';


// Basic Animation
// export const routeAnimations = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(
//       ':enter, :leave',
//       style({
//         position: 'fixed',
//         width: '100%',
//         height: '100%',
//       }),
//       { optional: true }
//     ),
//     group([
//       query(
//         ':leave',
//         [
//           animate(
//             '300ms ease-in-out',
//             style({
//               opacity: 0,
//               transform: 'translateX(-100%)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [
//           style({
//             opacity: 0,
//             transform: 'translateX(100%)',
//           }),
//           animate(
//             '300ms ease-in-out',
//             style({
//               opacity: 1,
//               transform: 'translateX(0%)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);


// Flip Animation
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ perspective: '1000px' }), // Add perspective to the container
    query(
      ':enter, :leave',
      style({
        position: 'fixed',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
      }),
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [
          animate(
            '600ms ease-in-out',
            style({
              transform: 'rotateY(180deg)',
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            transform: 'rotateY(-180deg)',
            opacity: 0,
          }),
          animate(
            '600ms ease-in-out',
            style({
              transform: 'rotateY(0deg)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);


// Fade and Scale Transition

// export const routeAnimations = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(
//       ':enter, :leave',
//       style({
//         position: 'fixed',
//         width: '100%',
//         height: '100%',
//       }),
//       { optional: true }
//     ),
//     group([
//       query(
//         ':leave',
//         [
//           animate(
//             '500ms ease-in-out',
//             style({
//               opacity: 0,
//               transform: 'scale(0.8)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [
//           style({
//             opacity: 0,
//             transform: 'scale(1.2)',
//           }),
//           animate(
//             '500ms ease-in-out',
//             style({
//               opacity: 1,
//               transform: 'scale(1)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);

// Slide Up/Down Transition
// export const routeAnimations = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(
//       ':enter, :leave',
//       style({
//         position: 'fixed',
//         width: '100%',
//         height: '100%',
//       }),
//       { optional: true }
//     ),
//     group([
//       query(
//         ':leave',
//         [
//           animate(
//             '400ms ease-in-out',
//             style({
//               opacity: 0,
//               transform: 'translateY(-100%)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [
//           style({
//             opacity: 0,
//             transform: 'translateY(100%)',
//           }),
//           animate(
//             '400ms ease-in-out',
//             style({
//               opacity: 1,
//               transform: 'translateY(0%)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);


// Fade Through Transition
// export const routeAnimations = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(':enter', [style({ opacity: 0 })], { optional: true }),
//     group([
//       query(
//         ':leave',
//         [animate('300ms ease-out', style({ opacity: 0 }))],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [
//           animate(
//             '300ms 300ms ease-out',
//             style({ opacity: 1 })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);

// Rotate Transition
// export const routeAnimations = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(
//       ':enter, :leave',
//       style({
//         position: 'fixed',
//         width: '100%',
//         height: '100%',
//       }),
//       { optional: true }
//     ),
//     group([
//       query(
//         ':leave',
//         [
//           animate(
//             '600ms ease-in-out',
//             style({
//               opacity: 0,
//               transform: 'rotate(-180deg) scale(0.5)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [
//           style({
//             opacity: 0,
//             transform: 'rotate(180deg) scale(0.5)',
//           }),
//           animate(
//             '600ms ease-in-out',
//             style({
//               opacity: 1,
//               transform: 'rotate(0deg) scale(1)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);


