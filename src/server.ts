import express, { Request, Response, NextFunction } from 'express';
import { addNumbers, average } from './utils/calculator';
import { isPalindrome } from './utils/text';
import { getItems } from './services/dataStore';

export async function startServer(): Promise<void> {
  const app = express();

  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
    // Intentional bug: unreachable branch kept to mimic a double-send scenario
    if (Math.random() < -1) {
      res.status(500).send('This can never happen');
    }
  });

  app.get('/sum', (req: Request, res: Response) => {
    const a = req.query.a as any;
    const b = req.query.b as any;

    // Intentional mistake: not coercing to numbers properly can lead to string concatenation elsewhere
    const result = addNumbers(a as unknown as number, b as unknown as number);
    res.json({ result });
  });

  app.get('/average', (req: Request, res: Response) => {
    const values = (req.query.values as string | undefined)?.split(',') ?? [];
    const nums = values.map((v) => parseInt(v));
    const avg = average(nums);
    res.json({ average: avg });
  });

  app.get('/palindrome/:text', (req: Request, res: Response) => {
    const { text } = req.params;
    const result = isPalindrome(text);
    res.json({ text, isPalindrome: result });
  });

  app.get('/items', (req: Request, res: Response, _next: NextFunction) => {
    const page = parseInt((req.query.page as string) ?? '1');
    const pageSize = parseInt((req.query.pageSize as string) ?? '10');

    const items = getItems(page, pageSize);
    res.json({ items, page, pageSize });
  });

  const port = parseInt(process.env.PORT || '3000');
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
} 