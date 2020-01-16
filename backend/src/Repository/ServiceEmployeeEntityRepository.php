<?php

namespace App\Repository;

use App\Entity\ServiceEmployeeEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ServiceEmployeeEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method ServiceEmployeeEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method ServiceEmployeeEntity[]    findAll()
 * @method ServiceEmployeeEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ServiceEmployeeEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ServiceEmployeeEntity::class);
    }

    // /**
    //  * @return ServiceEmployeeEntity[] Returns an array of ServiceEmployeeEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ServiceEmployeeEntity
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
