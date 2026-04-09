import { Component, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-8 relative overflow-hidden">
          {/* Faint 404 ghost number in background */}
          <p
            className="absolute select-none pointer-events-none font-headline italic leading-none"
            style={{ fontSize: 'clamp(10rem, 40vw, 32rem)', color: 'rgba(158,124,60,0.06)', letterSpacing: '-0.04em', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            aria-hidden="true"
          >
            Oops
          </p>

          <div className="text-center max-w-lg relative z-10">
            {/* White Hart deer icon */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 64 64" className="w-14 h-14 text-primary/40" fill="currentColor" aria-hidden="true">
                <path d="M32 4c-1 0-2 .5-2.5 1.2L26 10l-4-1-2 4 3 1.5-1.5 3.5-4-1-1 4 3.5 1L18 26l-5-2-1 4 4 1.5L14 34H9l1 4h5l1 4-4 1 1 4 5-1.5L18 50l3 1 1-4 3 8h4l-1-10 2-2 2 2-1 10h4l3-8 1 4 3-1-.5-4 5 1.5 1-4-4-1 1-4h5l1-4h-5l-2-4.5 4-1.5-1-4-5 2-1.5-4.5 3.5-1-1-4-4 1-1.5-3.5L42 13l-2-4-4 1-3.5-4.8C32 4.5 32.5 4 32 4z"/>
              </svg>
            </div>

            <p className="font-label uppercase tracking-[0.4em] text-primary text-[10px] mb-4">Est. 1591 · Still Standing</p>
            <h1 className="font-headline italic text-on-surface mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
              Even old inns have off days.
            </h1>
            <p className="text-on-surface-variant text-base leading-relaxed mb-2 font-light">
              This page had one too many at the bar and didn't quite make it.
            </p>
            <p className="text-on-surface-variant/60 text-sm mb-8">
              Try refreshing — or pop in for a pint while we sort it out.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <button
                onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
                className="bg-primary text-on-primary px-8 py-3 rounded-md font-label font-bold text-sm uppercase tracking-widest min-h-[44px] hover:opacity-90 transition-opacity"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="border border-outline-variant text-on-surface px-8 py-3 rounded-md font-label font-bold text-sm uppercase tracking-widest min-h-[44px] text-center hover:border-primary/40 transition-colors"
                onClick={() => this.setState({ hasError: false })}
              >
                Back to the Hart
              </Link>
            </div>

            {/* Quick links */}
            <div className="border-t border-outline-variant/20 pt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                { label: 'Dining', to: '/dining' },
                { label: 'Rooms', to: '/rooms' },
                { label: "What's On", to: '/whats-on' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => this.setState({ hasError: false })}
                  className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
