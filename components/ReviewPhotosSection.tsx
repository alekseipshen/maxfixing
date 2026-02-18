import { getReviewPhotos } from '@/lib/data/reviewPhotos';
import ReviewPhotosSlider from './ReviewPhotosSlider';

interface ReviewPhotosSectionProps {
  appliance?: string;  // appliance slug (e.g., 'refrigerator', 'washer')
  brand?: string;      // brand slug (e.g., 'samsung', 'sub-zero')
}

/**
 * Server component wrapper for ReviewPhotosSlider.
 * Handles photo selection logic based on page context (appliance/brand),
 * then passes the selected photo URLs to the client slider component.
 */
export default function ReviewPhotosSection({ appliance, brand }: ReviewPhotosSectionProps) {
  const photos = getReviewPhotos({ appliance, brand });
  
  return <ReviewPhotosSlider photos={photos} />;
}
