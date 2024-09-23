import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit true when openModal is called', (done: DoneFn) => {
    service.showModal$.subscribe({
      next: value => {
        expect(value).toBeTrue();
        done();
      },
      error: done.fail
    });
    service.openModal();
  });

  it('should emit false when closeModal is called', (done: DoneFn) => {
    service.showModal$.subscribe({
      next: value => {
        expect(value).toBeFalse();
        done();
      },
      error: done.fail
    });
    service.closeModal();
  });

  it('should emit values in the correct order when openModal and closeModal are called sequentially', (done: DoneFn) => {
    const expectedValues = [true, false];
    let index = 0;

    service.showModal$.subscribe({
      next: value => {
        expect(value).toBe(expectedValues[index]);
        index++;
        if (index === expectedValues.length) {
          done();
        }
      },
      error: done.fail
    });

    service.openModal();
    service.closeModal();
  });

  it('should handle multiple subscribers correctly', (done: DoneFn) => {
    const subscriber1: boolean[] = [];
    const subscriber2: boolean[] = [];

    service.showModal$.subscribe(value => subscriber1.push(value));
    service.showModal$.subscribe(value => subscriber2.push(value));

    service.openModal();
    service.closeModal();

    setTimeout(() => {
      expect(subscriber1).toEqual([true, false]);
      expect(subscriber2).toEqual([true, false]);
      done();
    }, 0);
  });

  it('should not emit any value after unsubscribing', (done: DoneFn) => {
    const emittedValues: boolean[] = [];
    const subscription = service.showModal$.subscribe(value => emittedValues.push(value));

    service.openModal();
    subscription.unsubscribe();
    service.closeModal();

    setTimeout(() => {
      expect(emittedValues).toEqual([true]);
      done();
    }, 0);
  });

  it('should emit exactly once per call', (done: DoneFn) => {
    let emitCount = 0;

    service.showModal$.subscribe({
      next: () => emitCount++,
      error: done.fail
    });

    service.openModal();
    service.closeModal();

    setTimeout(() => {
      expect(emitCount).toBe(2);
      done();
    }, 0);
  });

  it('should not emit any value if neither openModal nor closeModal are called', (done: DoneFn) => {
    let emitted = false;

    const subscription = service.showModal$.subscribe({
      next: () => {
        emitted = true;
      },
      error: done.fail
    });

    setTimeout(() => {
      expect(emitted).toBeFalse();
      subscription.unsubscribe();
      done();
    }, 100); // Waiting a little longer to ensure no emission
  });
});
