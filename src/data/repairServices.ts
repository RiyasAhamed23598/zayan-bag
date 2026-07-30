import type { RepairService } from '../types';

export const repairServices: RepairService[] = [
  {
    id: 'wheel-replacement',
    nameKey: 'repair.services.wheelReplacement',
    descriptionKey: 'repair.serviceDescriptions.wheelReplacement',
    icon: 'CircleDot',
  },
  {
    id: 'handle-replacement',
    nameKey: 'repair.services.handleReplacement',
    descriptionKey: 'repair.serviceDescriptions.handleReplacement',
    icon: 'Grip',
  },
  {
    id: 'zip-repair',
    nameKey: 'repair.services.zipRepair',
    descriptionKey: 'repair.serviceDescriptions.zipRepair',
    icon: 'Scissors',
  },
  {
    id: 'lock-repair',
    nameKey: 'repair.services.lockRepair',
    descriptionKey: 'repair.serviceDescriptions.lockRepair',
    icon: 'Lock',
  },
  {
    id: 'bag-stitching',
    nameKey: 'repair.services.bagStitching',
    descriptionKey: 'repair.serviceDescriptions.bagStitching',
    icon: 'Needle',
  },
  {
    id: 'body-repair',
    nameKey: 'repair.services.bodyRepair',
    descriptionKey: 'repair.serviceDescriptions.bodyRepair',
    icon: 'Wrench',
  },
  {
    id: 'accessories-replacement',
    nameKey: 'repair.services.accessoriesReplacement',
    descriptionKey: 'repair.serviceDescriptions.accessoriesReplacement',
    icon: 'Settings',
  },
  {
    id: 'cleaning-maintenance',
    nameKey: 'repair.services.cleaningMaintenance',
    descriptionKey: 'repair.serviceDescriptions.cleaningMaintenance',
    icon: 'Sparkles',
  },
];
